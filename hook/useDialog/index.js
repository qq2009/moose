import { getCurrentInstance, h, render, onUnmounted } from 'vue';
import { genDivContainer } from '@moose/utils';
import { isNull } from "lodash";
import Dialog from './dialog.vue';

/**
 * 弹出框钩子函数
 *
 * @param context 上下文对象
 */
export function useDialog(context) {
    const instance = getCurrentInstance();
    const { appContext } = instance;

    let container = null;
    let vnode = null;

    const mergeProps = {
        title: '提示',
        appendToBody: true,
        onClosed: () => {
            hide();
        }
    };

    /**
     * 隐藏组件
     *
     * @returns 无返回值
     */
    function hide() {
        render(null, container);
        container = null;
    }

    /**
     * 显示对话框组件
     *
     * @param props 对话框组件的属性，默认为空对象
     */
    function show(props = {}) {
        if(isNull(container)) {
            container = genDivContainer();
            vnode = h(Dialog, mergeProps, () =>
                h(context, props)
            );
            vnode.appContext = appContext;
            render(vnode, container);
        }
    }

    return {
        show,
        hide
    };
}
