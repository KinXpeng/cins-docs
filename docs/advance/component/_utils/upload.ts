// 阻止默认事件
export const dragInHandler = (e: any) => {
  if (!e.dataTransfer.types.includes('Files')) {
    return;
  }
  e.preventDefault();
};

/**
 * 拖拽松开事件
 * @param {File} e
 * @param {Array<string>} exts 上传文件类型
 * @param {number} maxSize 上传文件大小
 * */
export const dropHandler = async (e: any, exts?: Array<string>, maxSize?: number) => {
  e.preventDefault();
  let results = await Promise.all(
    [...e.dataTransfer.items].map((item) =>
      handleEntry(item.webkitGetAsEntry())
    )
  );
  results = results.flat(Infinity).filter((f: any) => f.type)
  return addFiles(results, exts, maxSize)
}

export const addFiles = (args: Array<any>, exts?: Array<string>, maxSize?: number) => {
  // args = args.filter((f: any) => exts.includes(extname(f.name)) && f.size <= maxSize)
  args = [...args]
  if (maxSize) {
    args = args.filter((f: any) => f.size <= maxSize)
  }
  if (exts && exts.length) {
    args = args.filter((f: any) => exts.includes(extname(f.name)))
  }

  const files: Array<any> = []
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

// 创建文件信息
const createNewFile = (f: any) => ({
  file: f,
  status: 'pending',
  progress: 0
})

// 文件后缀
const extname = (name: string) => {
  const i = name.lastIndexOf('.');
  if (i >= 0) {
    return name.substring(i).toLowerCase();
  }
  return '';
};

// 文件大小计算
const fileSize = (size: number) => {
  let number: number | string = size;
  let unit = 'bype';
  if (number >= 1024 ** 3) {
    number = number / 1024 ** 3;
    unit = 'G';
  } else if (number >= 1024 ** 2) {
    number = number / 1024 ** 2;
    unit = 'M';
  } else if (number >= 1024) {
    number = number / 1024;
    unit = 'KB';
  }
  number = number.toFixed(2);
  return +number + unit;
};

