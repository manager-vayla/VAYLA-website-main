export { };

declare global {
    interface Window {
        UnicornStudio: any;
    }

    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': any;
        }
    }
}
