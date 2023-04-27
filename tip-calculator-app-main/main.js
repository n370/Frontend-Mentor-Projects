/*
Bill
Select Tip %
5%
10%
15%
25%
50%
Custom
Number of People
Tip Amount
/ person
Total
/ person
Reset
*/

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="form">
                <div className="bill--div">
                    <p className="label">Bill</p>
                    <div className="input">
                        <img
                            className="dollar-icon"
                            src="./images/icon-dollar.svg"
                            alt="dollar icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            className="bill--input"
                            type="text"
                            placeholder="0"
                        />
                    </div>
                </div>
                <div className="tip--div">
                    <p className="label">Select Tip %</p>
                    <div className="tips">
                        <div className="tip">5%</div>
                        <div className="tip">10%</div>
                        <div className="tip">15%</div>
                        <div className="tip">25%</div>
                        <div className="tip">50%</div>
                        <div className="tip custom">
                            <input
                                className="tip--input"
                                type="text"
                                name="tip--custom"
                                placeholder="Custom"
                            />
                        </div>
                    </div>
                </div>
                <div className="people--div">
                    <p className="label">Number of People</p>
                    <div className="input">
                        <img
                            className="person-icon"
                            src="./images/icon-person.svg"
                            alt="person icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            type="text"
                            placeholder="0"
                        />
                    </div>
                </div>
            </div>
            <div className="results">

            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <img
                className="logo"
                src="./images/logo.svg"
                alt="logo of splitter"
                aria-hidden="false"
                role="img"
            />
            <Calculator/>
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)