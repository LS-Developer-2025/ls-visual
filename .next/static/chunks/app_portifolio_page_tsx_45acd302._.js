(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/portifolio/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PortfolioPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
// --- DADOS DAS IMAGENS DE EVENTOS ---
const eventosImages = [
    {
        id: 'evt-1',
        type: 'image',
        src: '/images/1.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 1'
    },
    {
        id: 'evt-2',
        type: 'image',
        src: '/images/2.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 2'
    },
    {
        id: 'evt-3',
        type: 'image',
        src: '/images/3.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 3'
    },
    {
        id: 'evt-4',
        type: 'image',
        src: '/images/4.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 4'
    },
    {
        id: 'evt-5',
        type: 'image',
        src: '/images/5.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 5'
    },
    {
        id: 'evt-7',
        type: 'image',
        src: '/images/7.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 7'
    },
    {
        id: 'evt-8',
        type: 'image',
        src: '/images/8.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 8'
    },
    {
        id: 'evt-9',
        type: 'image',
        src: '/images/9.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 9'
    },
    {
        id: 'evt-10',
        type: 'image',
        src: '/images/10.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 10'
    },
    {
        id: 'evt-11',
        type: 'image',
        src: '/images/11.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 11'
    },
    {
        id: 'evt-12',
        type: 'image',
        src: '/images/12.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 12'
    },
    {
        id: 'evt-13',
        type: 'image',
        src: '/images/13.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 13'
    },
    {
        id: 'evt-14',
        type: 'image',
        src: '/images/14.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 14'
    },
    {
        id: 'evt-15',
        type: 'image',
        src: '/images/15.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 15'
    },
    {
        id: 'evt-16',
        type: 'image',
        src: '/images/16.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 16'
    },
    {
        id: 'evt-17',
        type: 'image',
        src: '/images/17.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 17'
    },
    {
        id: 'evt-18',
        type: 'image',
        src: '/images/18.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 18'
    },
    {
        id: 'evt-19',
        type: 'image',
        src: '/images/19.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 19'
    },
    {
        id: 'evt-20',
        type: 'image',
        src: '/images/20.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 20'
    },
    {
        id: 'evt-21',
        type: 'image',
        src: '/images/21.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 21'
    },
    {
        id: 'evt-22',
        type: 'image',
        src: '/images/22.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 22'
    },
    {
        id: 'evt-23',
        type: 'image',
        src: '/images/23.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 23'
    },
    {
        id: 'evt-24',
        type: 'image',
        src: '/images/24.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 24'
    },
    {
        id: 'vid-8',
        type: 'video',
        src: '/images/25.mp4',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 25'
    },
    {
        id: 'evt-25',
        type: 'image',
        src: '/images/26.jpg',
        category: 'eventos',
        alt: 'Sonorização e Iluminação 26'
    }
];
// --- DADOS DAS IMAGENS DE BRINDES ---
const brindesImages = [
    {
        id: 'brd-1',
        type: 'image',
        src: '/images/brindes/Camiseta Preta.png',
        category: 'brindes',
        alt: 'Camiseta Personalizada 1'
    },
    {
        id: 'brd-2',
        type: 'image',
        src: '/images/brindes/Camiseta Branca.png',
        category: 'brindes',
        alt: 'Camiseta Personalizada 2'
    },
    {
        id: 'brd-3',
        type: 'image',
        src: '/images/brindes/Camiseta Beje.png',
        category: 'brindes',
        alt: 'Camiseta Personalizada 3'
    },
    {
        id: 'brd-4',
        type: 'image',
        src: '/images/brindes/8.png',
        category: 'brindes',
        alt: 'Copos Personalizados 4'
    },
    {
        id: 'vid-2',
        type: 'video',
        src: '/images/brindes/1.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 5'
    },
    {
        id: 'vid-3',
        type: 'video',
        src: '/images/brindes/2.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 6'
    },
    {
        id: 'vid-4',
        type: 'video',
        src: '/images/brindes/3.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 7'
    },
    {
        id: 'vid-5',
        type: 'video',
        src: '/images/brindes/4.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 8'
    },
    {
        id: 'vid-6',
        type: 'video',
        src: '/images/brindes/6.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 9'
    },
    {
        id: 'vid-7',
        type: 'video',
        src: '/images/brindes/7.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 10'
    },
    {
        id: 'vid-9',
        type: 'video',
        src: '/images/brindes/5.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 11'
    },
    {
        id: 'vid-10',
        type: 'video',
        src: '/images/brindes/8.mp4',
        category: 'brindes',
        alt: 'Camiseta Personalizada 12'
    }
];
// Componente reutilizável para a grade de imagens
const ImageGrid = ({ items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "group relative aspect-square rounded-xl overflow-hidden shadow-lg",
                    children: [
                        item.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: item.src,
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                            className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.src,
                            alt: item.alt,
                            fill: true,
                            className: "object-cover transition-transform duration-500 group-hover:scale-110",
                            sizes: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-semibold text-sm",
                                children: item.alt
                            }, void 0, false, {
                                fileName: "[project]/app/portifolio/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/portifolio/page.tsx",
            lineNumber: 55,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portifolio/page.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, this);
_c = ImageGrid;
function PortfolioPage() {
    const handleScroll = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col text-ls-branco min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-5xl md:text-7xl font-extrabold text-center mb-8",
                    children: "Nosso Portfólio"
                }, void 0, false, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    className: "text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto",
                    children: "Explore alguns dos nossos trabalhos em eventos e os brindes personalizados que criamos."
                }, void 0, false, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.4
                    },
                    className: "flex justify-center items-center gap-4 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleScroll('eventos'),
                            className: "bg-white/10 backdrop-blur-md border border-white/20 text-ls-branco font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30",
                            children: "Eventos"
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleScroll('brindes'),
                            className: "bg-white/10 backdrop-blur-md border border-white/20 text-ls-branco font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30",
                            children: "Brindes"
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "eventos",
                    className: "py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-ls-laranja whitespace-nowrap",
                                    children: "Eventos"
                                }, void 0, false, {
                                    fileName: "[project]/app/portifolio/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-px bg-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/app/portifolio/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageGrid, {
                            items: eventosImages
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "brindes",
                    className: "py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-ls-laranja whitespace-nowrap",
                                    children: "Brindes Personalizados"
                                }, void 0, false, {
                                    fileName: "[project]/app/portifolio/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-px bg-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/app/portifolio/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageGrid, {
                            items: brindesImages
                        }, void 0, false, {
                            fileName: "[project]/app/portifolio/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portifolio/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portifolio/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portifolio/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c1 = PortfolioPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImageGrid");
__turbopack_context__.k.register(_c1, "PortfolioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_portifolio_page_tsx_45acd302._.js.map