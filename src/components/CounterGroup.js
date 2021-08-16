import Counter from "./Counter"

function CounterGroup(props) {

    function generateArray() {
        return new Array(props.counterSize).fill(Date.now());
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