function handleClick() {
    alert("button clicked");
}

function handleFormSubmit(event) {
    event.preventDefault();  // prevent reload
    alert("your form submitted");
}

function EventHandle() {
    return (
        <div>
            <button onClick={handleClick}>click</button>

            <br /><br />

            <form onSubmit={handleFormSubmit}>
                <label>Enter your name</label>
                <input type="text" required /> <br />

                <button type="submit">submit form</button>
            </form>
        </div>
    )
}

export { EventHandle }
