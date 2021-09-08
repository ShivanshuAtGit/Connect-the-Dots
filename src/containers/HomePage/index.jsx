import React from "react";
import './style.css';

const HomePage = ({ handlePlay }) => {
    const initialValues = {
        row: "",
        cell: "",
        player1: "",
        player2: "",
    }
    const [values, setValues] = React.useState(initialValues);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setValues((preState) => ({ ...preState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePlay(values)
    }

    return (
        <section className="frontPage">
            <h2 className="heading">Let's Play</h2>
            <form onSubmit={handleSubmit}>
                <section className="block">
                    <h3 className="heading">Select matrix</h3>
                    <div className="data_field">
                        <label htmlFor="row">Number of Row:{' '}</label>
                        <input
                            id="row"
                            name="row"
                            className="inputTxt"
                            type="number"
                            min="5"
                            value={values.row}
                            onChange={handleInputs}
                            required
                        />
                    </div>
                    <div className="data_field">
                        <label htmlFor="cell">Number of Column:{' '}</label>
                        <input
                            id="cell"
                            name="cell"
                            className="inputTxt"
                            type="number"
                            min="6"
                            value={values.cell}
                            onChange={handleInputs}
                            required
                        />
                    </div>
                </section>

                <section className="block">
                    <h3 className="heading">Player details</h3>
                    <div className="data_field">
                        <label htmlFor="player1">First Player Name:{' '}</label>
                        <input
                            placeholder="Player1"
                            name="player1"
                            id="player1"
                            className="inputTxt"
                            value={values.player1}
                            onChange={handleInputs}
                            type="text"
                        />
                    </div>
                    <div className="data_field">
                        <label htmlFor="player2">Second Player Name:{' '}</label>
                        <input
                            placeholder="Player2"
                            name="player2"
                            id="player2"
                            className="inputTxt"
                            value={values.player2}
                            onChange={handleInputs}
                            type="text"
                        />
                    </div>
                </section>
                <div className="btn_box">
                    <input id="submit" type="submit" value="Play" />
                </div>
            </form>
        </section>
    )
}

export default HomePage;