function VariableInJsx() {
    let name = "Tanisha";
    let address = "panipat"

    return (
        <div>
            {/* accessing variable in jsx in curly braces */}
            <h1>my name is {name}</h1>
            <h1>my address is {address} </h1>
        </div>
    );
}

export { VariableInJsx }