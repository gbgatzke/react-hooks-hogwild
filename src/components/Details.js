

function Details({ hog }) {
    return (
        <>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}lbs.</p>
            <p>{hog.greased ? "Greased" : "Dry"}</p>
            <p>Highest medal achieved: {hog.hma}</p>
        </>
    )
}

export default Details