import { getCurrentInstance, h, render, onUnmounted } from 'vue';
import { genDivContainer } from '@moose/utils';
import { isNull } from "lodash";
import Drawer from './drawer.vue';

/**
 * 抽屉组件自定义Hook
 *
 * @param context 上下文对象
 */
export function useDrawer(context) {
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
     * 隐藏抽屉组件
     *
     * @returns 无返回值
     */
    function hide() {
        render(null, container);
        container = null;
    }

    /**
     * 显示抽屉组件
     *
     * @param props 抽屉组件的属性配置，默认为空对象
     */
    function show(props = {}) {
        if(isNull(container)) {
            container = genDivContainer();
            vnode = h(Drawer, mergeProps, () =>
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
