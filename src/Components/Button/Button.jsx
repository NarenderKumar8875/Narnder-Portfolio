
import "./btn.css"

const Button = ({ value, setHidden, scroll, fetchData }) => {
    return (
        <>
            <button onClick={() => {
                fetchData && fetchData()
                setHidden && setHidden((prev) => !prev)
                scroll && scroll.current.scrollIntoView({ behavior: 'smooth' })

            }} className='btn pointer-events-auto sm:px-8 max-sm:px-5 py-2 max-sm:text-sm'>{value}</button>
        </>
    )
}

export default Button
