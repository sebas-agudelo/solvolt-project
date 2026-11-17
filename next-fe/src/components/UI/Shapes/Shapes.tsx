export const DownCurveShape = ({ color }: { color: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 224 1440 96"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 block w-full h-8 md:h-12 2xl:h-16 -translate-y-full"
        >
            <path fill={color} d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
    )
}