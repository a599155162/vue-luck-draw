interface FontType {
    text: string;
    top?: string | number;
    fontColor?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    lineHeight?: string;
}
interface ImgType {
    src: string;
    top?: string | number;
    width?: string;
    height?: string;
    $resolve?: Function;
    $reject?: Function;
}
declare type BorderRadiusType = string | number;
declare type BackgroundType = string;
declare type ShadowType = string;
interface ConfigType {
    nodeType?: number;
    ob?: boolean;
    flag?: 'WEB' | 'MP-WX' | 'UNI-H5' | 'UNI-MP' | 'TARO-H5' | 'TARO-MP';
    el?: string;
    divElement?: HTMLDivElement;
    canvasElement?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    dpr?: number;
    width: string;
    height: string;
    unitFunc?: (num: number, unit: string) => number;
    rAF?: Function;
    setTimeout?: Function;
    setInterval?: Function;
    clearTimeout?: Function;
    clearInterval?: Function;
    beforeCreate?: Function;
    beforeInit?: Function;
    afterInit?: Function;
    beforeDraw?: Function;
    afterDraw?: Function;
}
interface UniImageType {
    path: string;
    width: number;
    height: number;
}

interface WatchOptType {
    handler?: () => Function;
    immediate?: boolean;
    deep?: boolean;
}

declare class Lucky {
    protected readonly config: ConfigType;
    protected readonly ctx: CanvasRenderingContext2D;
    protected htmlFontSize: number;
    protected rAF: Function;
    protected boxWidth: number;
    protected boxHeight: number;
    /**
     * 公共构造器
     * @param config
     */
    constructor(config: string | HTMLDivElement | ConfigType);
    /**
     * 初始化方法
     */
    init(willUpdateImgs?: object): void;
    /**
     * 鼠标点击事件
     * @param e 事件参数
     */
    protected handleClick(e: MouseEvent): void;
    /**
     * 鼠标按下事件
     * @param e 事件参数
     */
    protected handleMouseDown(e: MouseEvent): void;
    /**
     * 鼠标抬起事件
     * @param e 事件参数
     */
    protected handleMouseUp(e: MouseEvent): void;
    /**
     * 鼠标移动事件
     * @param e 事件参数
     */
    protected handleMouseMove(e: MouseEvent): void;
    /**
     * 换算坐标
     */
    protected conversionAxis(x: number, y: number): [number, number];
    /**
     * 设备像素比
     * window 环境下自动获取, 其余环境手动传入
     */
    protected setDpr(): void;
    /**
     * 根标签的字体大小
     */
    protected setHTMLFontSize(): void;
    /**
     * 重置盒子和canvas的宽高
     */
    private resetWidthAndHeight;
    /**
     * 从 window 对象上获取一些方法
     */
    private initWindowFunction;
    /**
     * 根据 dpr 缩放 canvas 并处理位移
     */
    protected zoomCanvas(): void;
    /**
     * 异步加载图片并返回图片的几何信息
     * @param src 图片路径
     * @param info 图片信息
     */
    protected loadImg(src: string, info: ImgType, resolveName?: string): Promise<HTMLImageElement | UniImageType>;
    /**
     * 公共绘制图片的方法
     * @param imgObj 图片对象
     * @param xAxis x轴位置
     * @param yAxis y轴位置
     * @param width 渲染宽度
     * @param height 渲染高度
     */
    protected drawImage(imgObj: HTMLImageElement | UniImageType, xAxis: number, yAxis: number, width: number, height: number): void;
    /**
     * 获取长度
     * @param length 将要转换的长度
     * @return 返回长度
     */
    protected getLength(length: string | number | undefined): number;
    /**
     * 转换单位
     * @param { string } value 将要转换的值
     * @param { number } denominator 分子
     * @return { number } 返回新的字符串
     */
    protected changeUnits(value: string, denominator?: number): number;
    /**
     * 添加一个新的响应式数据 (临时)
     * @param data 数据
     * @param key 属性
     * @param value 新值
     */
    $set(data: object, key: string | number, value: any): void;
    /**
     * 添加一个属性计算 (临时)
     * @param data 源数据
     * @param key 属性名
     * @param callback 回调函数
     */
    protected $computed(data: object, key: string, callback: Function): void;
    /**
     * 添加一个观察者 create user watcher
     * @param expr 表达式
     * @param handler 回调函数
     * @param watchOpt 配置参数
     * @return 卸载当前观察者的函数 (暂未返回)
     */
    protected $watch(expr: string | Function, handler: Function | WatchOptType, watchOpt?: WatchOptType): Function;
}

interface PrizeFontType$1 extends FontType {
    wordWrap?: boolean;
    lengthLimit?: string | number;
}
interface ButtonFontType$1 extends FontType {
}
interface BlockImgType$1 extends ImgType {
    rotate?: boolean;
}
interface PrizeImgType$1 extends ImgType {
}
interface ButtonImgType$1 extends ImgType {
}
interface BlockType$1 {
    padding?: string;
    background?: BackgroundType;
    imgs?: Array<BlockImgType$1>;
}
interface PrizeType$1 {
    background?: BackgroundType;
    fonts?: Array<PrizeFontType$1>;
    imgs?: Array<PrizeImgType$1>;
}
interface ButtonType$1 {
    radius?: string;
    pointer?: boolean;
    background?: BackgroundType;
    fonts?: Array<ButtonFontType$1>;
    imgs?: Array<ButtonImgType$1>;
}
interface DefaultConfigType$1 {
    gutter?: string | number;
    offsetDegree?: number;
    speed?: number;
    speedFunction?: string;
    accelerationTime?: number;
    decelerationTime?: number;
    stopRange?: number;
}
interface DefaultStyleType$1 {
    background?: BackgroundType;
    fontColor?: PrizeFontType$1['fontColor'];
    fontSize?: PrizeFontType$1['fontSize'];
    fontStyle?: PrizeFontType$1['fontStyle'];
    fontWeight?: PrizeFontType$1['fontWeight'];
    lineHeight?: PrizeFontType$1['lineHeight'];
    wordWrap?: PrizeFontType$1['wordWrap'];
    lengthLimit?: PrizeFontType$1['lengthLimit'];
}
declare type StartCallbackType$1 = (e: MouseEvent) => void;
declare type EndCallbackType$1 = (prize: object) => void;
interface LuckyWheelConfig {
    blocks?: Array<BlockType$1>;
    prizes?: Array<PrizeType$1>;
    buttons?: Array<ButtonType$1>;
    defaultConfig?: DefaultConfigType$1;
    defaultStyle?: DefaultStyleType$1;
    start?: StartCallbackType$1;
    end?: EndCallbackType$1;
}

declare class LuckyWheel extends Lucky {
    private blocks;
    private prizes;
    private buttons;
    private defaultConfig;
    private _defaultConfig;
    private defaultStyle;
    private _defaultStyle;
    private startCallback?;
    private endCallback?;
    private Radius;
    private prizeRadius;
    private prizeDeg;
    private prizeRadian;
    private rotateDeg;
    private maxBtnRadius;
    private startTime;
    private endTime;
    private stopDeg;
    private endDeg;
    private FPS;
    /**
     * 中奖索引
     * prizeFlag = undefined 时, 处于开始抽奖阶段, 正常旋转
     * prizeFlag >= 0 时, 说明stop方法被调用, 并且传入了中奖索引
     * prizeFlag === -1 时, 说明stop方法被调用, 并且传入了负值, 本次抽奖无效
     */
    private prizeFlag;
    private blockImgs;
    private prizeImgs;
    private btnImgs;
    /**
     * 大转盘构造器
     * @param config 元素标识
     * @param data 抽奖配置项
     */
    constructor(config: ConfigType, data?: LuckyWheelConfig);
    /**
     * 初始化数据
     * @param data
     */
    private initData;
    /**
     * 初始化属性计算
     */
    private initComputed;
    /**
     * 初始化观察者
     */
    private initWatch;
    /**
     * 初始化 canvas 抽奖
     * @param { willUpdateImgs } willUpdateImgs 需要更新的图片
     */
    init(willUpdateImgs: {
        blockImgs?: Array<BlockImgType$1[] | undefined>;
        prizeImgs?: Array<PrizeImgType$1[] | undefined>;
        btnImgs?: Array<ButtonImgType$1[] | undefined>;
    }): void;
    /**
     * canvas点击事件
     * @param e 事件参数
     */
    protected handleClick(e: MouseEvent): void;
    /**
     * 单独加载某一张图片并计算其实际渲染宽高
     * @param { number } cellIndex 奖品索引
     * @param { number } imgIndex 奖品图片索引
     * @param { Function } callBack 图片加载完毕回调
     */
    private loadAndCacheImg;
    /**
     * 计算图片的渲染宽高
     * @param imgObj 图片标签元素
     * @param imgInfo 图片信息
     * @param maxWidth 最大宽度
     * @param maxHeight 最大高度
     * @return [渲染宽度, 渲染高度]
     */
    private computedWidthAndHeight;
    /**
     * 开始绘制
     */
    protected draw(): void;
    /**
     * 对外暴露: 开始抽奖方法
     */
    play(): void;
    /**
     * 对外暴露: 缓慢停止方法
     * @param index 中奖索引
     */
    stop(index: number): void;
    /**
     * 实际开始执行方法
     * @param num 记录帧动画执行多少次
     */
    private run;
    /**
     * 缓慢停止的方法
     */
    private slowDown;
    /**
     * 获取相对宽度
     * @param length 将要转换的宽度
     * @param width 宽度计算百分比
     * @return 返回相对宽度
     */
    private getWidth;
    /**
     * 获取相对高度
     * @param length 将要转换的高度
     * @param height 高度计算百分比
     * @return 返回相对高度
     */
    private getHeight;
    /**
     * 获取相对(居中)X坐标
     * @param width
     * @return 返回x坐标
     */
    private getOffsetX;
    /**
     * 换算渲染坐标
     * @param x
     * @param y
     */
    protected conversionAxis(x: number, y: number): [number, number];
}

interface PrizeFontType extends FontType {
    wordWrap?: boolean;
    lengthLimit?: string | number;
}
interface ButtonFontType extends FontType {
    wordWrap?: boolean;
    lengthLimit?: string | number;
}
interface BlockImgType extends ImgType {
}
interface PrizeImgType extends ImgType {
    activeSrc?: string;
}
interface ButtonImgType extends ImgType {
}
interface BlockType {
    borderRadius?: BorderRadiusType;
    background?: BackgroundType;
    padding?: string;
    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    imgs?: Array<BlockImgType>;
}
interface CellType<T, U> {
    x: number;
    y: number;
    col?: number;
    row?: number;
    borderRadius?: BorderRadiusType;
    background?: BackgroundType;
    shadow?: ShadowType;
    fonts?: Array<T>;
    imgs?: Array<U>;
}
declare type PrizeType = CellType<PrizeFontType, PrizeImgType>;
declare type ButtonType = CellType<ButtonFontType, ButtonImgType> & {
    callback?: Function;
};
interface DefaultConfigType {
    gutter?: number;
    speed?: number;
    accelerationTime?: number;
    decelerationTime?: number;
}
interface DefaultStyleType {
    borderRadius?: BorderRadiusType;
    background?: BackgroundType;
    shadow?: ShadowType;
    fontColor?: PrizeFontType['fontColor'];
    fontSize?: PrizeFontType['fontSize'];
    fontStyle?: PrizeFontType['fontStyle'];
    fontWeight?: PrizeFontType['fontWeight'];
    lineHeight?: PrizeFontType['lineHeight'];
    wordWrap?: PrizeFontType['wordWrap'];
    lengthLimit?: PrizeFontType['lengthLimit'];
}
interface ActiveStyleType {
    background?: BackgroundType;
    shadow?: ShadowType;
    fontColor?: PrizeFontType['fontColor'];
    fontSize?: PrizeFontType['fontSize'];
    fontStyle?: PrizeFontType['fontStyle'];
    fontWeight?: PrizeFontType['fontWeight'];
    lineHeight?: PrizeFontType['lineHeight'];
}
declare type RowsType = number;
declare type ColsType = number;
declare type StartCallbackType = (e: MouseEvent, button?: ButtonType) => void;
declare type EndCallbackType = (prize: object) => void;
interface LuckyGridConfig {
    rows?: RowsType;
    cols?: ColsType;
    blocks?: Array<BlockType>;
    prizes?: Array<PrizeType>;
    buttons?: Array<ButtonType>;
    defaultConfig?: DefaultConfigType;
    defaultStyle?: DefaultStyleType;
    activeStyle?: ActiveStyleType;
    start?: StartCallbackType;
    end?: EndCallbackType;
}

declare class LuckyGrid extends Lucky {
    private rows;
    private cols;
    private blocks;
    private prizes;
    private buttons;
    private button?;
    private defaultConfig;
    private _defaultConfig;
    private defaultStyle;
    private _defaultStyle;
    private activeStyle;
    private _activeStyle;
    private startCallback?;
    private endCallback?;
    private cellWidth;
    private cellHeight;
    private startTime;
    private endTime;
    private currIndex;
    private stopIndex;
    private endIndex;
    private demo;
    private timer;
    private FPS;
    /**
     * 中奖索引
     * prizeFlag = undefined 时, 处于开始抽奖阶段, 正常旋转
     * prizeFlag >= 0 时, 说明stop方法被调用, 并且传入了中奖索引
     * prizeFlag === -1 时, 说明stop方法被调用, 并且传入了负值, 本次抽奖无效
     */
    private prizeFlag;
    private cells;
    private prizeArea;
    private blockImgs;
    private btnImgs;
    private prizeImgs;
    /**
     * 九宫格构造器
     * @param config 元素标识
     * @param data 抽奖配置项
     */
    constructor(config: ConfigType, data?: LuckyGridConfig);
    /**
     * 初始化数据
     * @param data
     */
    private initData;
    /**
     * 初始化属性计算
     */
    private initComputed;
    /**
     * 初始化观察者
     */
    private initWatch;
    /**
     * 初始化 canvas 抽奖
     * @param willUpdateImgs 需要更新的图片
     */
    init(willUpdateImgs: {
        blockImgs?: Array<BlockImgType[] | undefined>;
        prizeImgs?: Array<PrizeImgType[] | undefined>;
        btnImgs?: Array<ButtonImgType[] | undefined>;
    }): void;
    /**
     * canvas点击事件
     * @param e 事件参数
     */
    protected handleClick(e: MouseEvent): void;
    /**
     * 根据索引单独加载指定图片并缓存
     * @param { number } prizeIndex 奖品索引
     * @param { number } imgIndex 奖品图片索引
     * @param { Function } callBack 图片加载完毕回调
     */
    private loadAndCacheImg;
    /**
     * 计算图片的渲染宽高
     * @param imgObj 图片标签元素
     * @param imgInfo 图片信息
     * @param cell 格子信息
     * @return [渲染宽度, 渲染高度]
     */
    private computedWidthAndHeight;
    /**
     * 绘制九宫格抽奖
     */
    protected draw(): void;
    /**
     * 处理背景色
     * @param x
     * @param y
     * @param width
     * @param height
     * @param background
     * @param isActive
     */
    private handleBackground;
    /**
     * 对外暴露: 开始抽奖方法
     */
    play(): void;
    /**
     * 对外暴露: 缓慢停止方法
     * @param index 中奖索引
     */
    stop(index: number): void;
    /**
     * 实际开始执行方法
     * @param num 记录帧动画执行多少次
     */
    private run;
    /**
     * 缓慢停止的方法
     */
    private slowDown;
    /**
     * 开启中奖标识自动游走
     */
    walk(): void;
    /**
     * 计算奖品格子的几何属性
     * @param { array } [...矩阵坐标, col, row]
     * @return { array } [...真实坐标, width, height]
     */
    private getGeometricProperty;
    /**
     * 转换并获取宽度
     * @param width 将要转换的宽度
     * @param col 横向合并的格子
     * @return 返回相对宽度
     */
    private getWidth;
    /**
     * 转换并获取高度
     * @param height 将要转换的高度
     * @param row 纵向合并的格子
     * @return 返回相对高度
     */
    private getHeight;
    /**
     * 获取相对(居中)X坐标
     * @param width
     * @param col
     */
    private getOffsetX;
    /**
     * 换算渲染坐标
     * @param x
     * @param y
     */
    protected conversionAxis(x: number, y: number): [number, number];
}

export { LuckyGrid, LuckyWheel };
