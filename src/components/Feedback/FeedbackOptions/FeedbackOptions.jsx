import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const elements = options.map((option, index) => (
        <p key={index}><button className={style.btn} onClick={() => onLeaveFeedback(option)}>{option}</button></p>
    ));

    return (
        <div>
            {elements}
        </div>  
    )
}

export default FeedbackOptions;