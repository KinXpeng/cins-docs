// 图标可换成需要的图片
import errorIcon from './error_tips.png';
import successIcon from './success_tips.png';

/*
** @params config object
** 传参示例
{
  type:'success', // 可选值success/error
  message:'提示信息，<a>跳转</a>', // 可嵌入a标签
  callback:() => {
    //  回调函数  点击a标签执行的函数
  }
}
*/
const Prompt = (config) => {
  // 已有提示时清除
  let isExitNode = document.querySelector('._div_prompt_node');
  if (isExitNode) {
    document.body.removeChild(isExitNode);
  }

  // 创建dom节点
  const _div = document.createElement('div');
  const _div_tips = document.createElement('div');
  const _img_tips = document.createElement('img');
  const _p_tips_text = document.createElement('p');

  // 遮罩层
  _div.className = '_div_prompt_node';
  _div.style.cssText = `
    position:fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  // 提示框
  _div_tips.style.cssText = `
    width:30%;
    min-height:110px;
    background-color:rgba(0,0,0,0.8);
    border-radius:10px;
    padding:15px;
    color:#fff;
    text-align:center;
  `;

  // 提示图标
  _img_tips.src = config.type == 'error' ? errorIcon : successIcon;
  _img_tips.style.cssText = `
    width:45px;
    height:45px;
    margin-bottom:2px;
  `;

  // 提示语
  _p_tips_text.style.cssText = `
    line-height:20px;
    font-size:14px;
  `;
  _p_tips_text.innerHTML = config.message;

  // 插入提示dom节点
  _div_tips.appendChild(_img_tips);
  _div_tips.appendChild(_p_tips_text);
  _div.appendChild(_div_tips);
  document.body.appendChild(_div);

  let _alink = document.querySelector('._div_prompt_node a');
  if (_alink) {
    _alink.style.cssText = `
      text-decoration:underline;
      color:#7ca2f9;
    `;

    _alink.onclick = function (e) {
      // 阻止冒泡
      // e.stopPropagation();
      config.callback();
    };
  }

  // 提示框关闭
  _div_tips.onclick = function () {
    document.body.removeChild(_div);
  };
};

export { Prompt };
