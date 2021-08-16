import Counter from "./Counter"

function CounterGroup() {

    function generateArray() {
        return new Array(5).fill(Date.now());
    }

    const counterList = generateArray();
    return (
        <div>
            {counterList.map((item, index) => (
            <Counter key={item + index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;