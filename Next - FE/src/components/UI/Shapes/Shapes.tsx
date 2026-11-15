export const Shape5 = () => {
  return (
        <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none z-0">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                className="block w-full h-24 z-30"
                style={{ transform: 'scaleX(-1)' }}
                preserveAspectRatio="none"
            >
                <path fill="#083344" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
    )
}


export const UpCurveShape = ({ color }: { color: string }) => {
    return (
         <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none z-0">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                className="block w-full h-20 md:h-33 2xl:h-43 z-30"
                style={{ transform: 'scaleX(-1)' }}
                preserveAspectRatio="none"
            >
                <path fill={color} fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export const DownCurveShape = ({ color }: { color: string }) => {
    return (
        // <div className="absolute left-0 top-[0%] -translate-y-[0%] w-full overflow-hidden leading-none">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 224 1440 96"
  preserveAspectRatio="none"
  className="pointer-events-none absolute left-0 top-0 block w-full h-8 md:h-12 2xl:h-16 -translate-y-full"
>
  <path fill={color} d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
</svg>
        // </div>
    )
}

export const DownCurveShape2 = ({ color }: { color: string }) => {
    return (

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  
            className="absolute left-0 bottom-0 block w-full h-20 md:h-33 2xl:h-43"
                preserveAspectRatio="none">
                <path fill={color} fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

                )
}


// 083344