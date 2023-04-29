const Calculator = (props) => {
    return (
        <div className="calculator">
            <div className="form">
                <div className="bill--div">
                    <p className="label">Bill</p>
                    <div className="input--div">
                        <img
                            className="input-icon"
                            src="./images/icon-dollar.svg"
                            alt="dollar icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            className="inputs"
                            type="text"
                            placeholder="0"
                            name="bill"
                            value={props.billValue}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="tip--div">
                    <p className="label label--tips">Select Tip %</p>
                    <div className="tips">
                        <div 
                            className="tip"
                            name="tip"
                            value={5}
                            onClick={props.handleTipClick}
                        >5%</div>
                        <div 
                            className="tip"
                            name="tip"
                            value={10}
                            onClick={props.handleTipClick}
                        >10%</div>
                        <div 
                            className="tip"
                            name="tip"
                            value={15}
                            onClick={props.handleTipClick}
                        >15%</div>
                        <div 
                            className="tip"
                            name="tip"
                            value={25}
                            onClick={props.handleTipClick}
                        >25%</div>
                        <div 
                            className="tip"
                            name="tip"
                            value={50}
                            onClick={props.handleTipClick}
                        >50%</div>
                        <div className="custom">
                            <input
                                className="tip--input"
                                type="text"
                                name="tip"
                                placeholder="Custom"
                                value={props.tipCustomValue}
                                onChange={props.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="people--div">
                    <p className="label">Number of People</p>
                    <div className="input--div">
                        <img
                            className="input-icon"
                            src="./images/icon-person.svg"
                            alt="person icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            className="inputs"
                            type="text"
                            placeholder="0"
                            name="people"
                            value={props.peopleValue}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
            </div>
            <div className="results">
                <div className="result--numbers--div">
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Tip Amount</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                            <h1>$0.00</h1>
                        </div>
                    </div>
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Total</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                        <img/>
                            <h1>$0.00</h1>
                        </div>
                    </div>
                </div>
                <div className="reset">
                    RESET
                </div>
            </div>
        </div>
    )
}

const App = () => {

    const [tipSelected, setTipSelected] = React.useState()

    const [data, setData] = React.useState({
        "bill": 0,
        "tip": 0,
        "people": 0,
        "amout": 0,
        "total": 0
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(p => ({
            ...p,
            [name]: value
        }))
    }
    const handleTipClick = (e) => {
        const value = e.target.getAttribute('value');
        const name = e.target.getAttribute('name');
        setData(p => ({
            ...p,
            [name]: value
        }))
    }

    console.log(data)//------------------------>Delete
    return (
        <div className="app">
            <img
                className="logo"
                src="./images/logo.svg"
                alt="logo of splitter"
                aria-hidden="false"
                role="img"
            />
            <Calculator
                onChange={handleChange}
                handleTipClick={handleTipClick}
                billValue={data.bill}
                peopleValue={data.people}
            />
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)