export const calculateActiveIndex = (scrollLeft: number, offsetWidth: number): number => {
    return Math.round(scrollLeft / offsetWidth)
}

export const scrollToSlide = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
        ref.current.scrollTo({
            left: ref.current.offsetWidth * index,
            behavior: "smooth",
        })
    }
}
