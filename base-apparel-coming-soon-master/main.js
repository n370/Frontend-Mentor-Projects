
function Header () {
    return (
        <header className="header">
            <img 
                className="header--img"
                src=".\images\logo.svg"
                alt="logo Base Apparel" 
            />
        </header>
    )
}

function Form() {
    return (
        <form className="form">
            <input 
                className="email--input"
                type="email"
                placeholder="Email Address"
                required
            ></input>
            <button className="form--button">
                <img 
                    className="form--button--icon"
                    src=".\images\icon-arrow.svg"
                    alt="Arrow icon"
                />
            </button>
        </form>
    )
}

function Main () {
    return (
        <main>
            <h1>
                WE'RE
                <span> COMING SOON</span> 
            </h1>
            <p>
                Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <Form />
        </main>
    )
}

function App () {
    return (
        <div>
            <Header />
            <img
                src="./images/hero-desktop.jpg"
                alt="top-model of Base Apparel"
            />
            <Main />
        </div>
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);