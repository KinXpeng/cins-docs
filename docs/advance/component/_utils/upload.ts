const createNewFile = (f: any) => ({
  file: f,
  status: 'pending',
  progress: 0
})

// 阻止默认事件
export const dragInHandler = (e: any) => {
  if (!e.dataTransfer.types.includes('Files')) {
    return;
  }
  e.preventDefault();
};

export const dropHandler = async (e: any) => {
  e.preventDefault();
  let results = await Promise.all(
    [...e.dataTransfer.items].map((item) =>
      handleEntry(item.webkitGetAsEntry())
    )
  );
  results = results.flat(Infinity).filter((f: any) => f.type)
  return addFiles(...results)
}

export const addFiles = (...args: any) => {
  args = args.filter((f: any) => f.type)
  const files: any = []
  files.push(...args.map(createNewFile))
  return files
}

// 处理上传目录/文件
const handleEntry = (entry: any) => {
  return new Promise((resolve) => {
    if (entry.isFile) {
      entry.file(resolve);
      return;
    }
    const dirReader = entry.createReader();
    dirReader.readEntries(async (entries: any) => {
      resolve(await Promise.all(entries.map(handleEntry)));
    });
  });
};
