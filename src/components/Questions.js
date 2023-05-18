import { useState} from "react";
import './Questions.css';


const Questions = () => {

  const [click, setClick] = useState([
    {question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries.'},
    {question: 'How much does Netflix cost?', answer: 'Watch Netflix on your device one fixed monthly fee.'},
    {question: 'Where I can watch?', answer: 'Watch anywhere, anytime.'},
    {question: 'How do I cancel?', answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can cancel your account online in two clicks.'},
    {question: 'Is Netflix good for kids?', answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy shows in their own space.'}
  ]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  return(
    <div className="questions">
      {click.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => handleQuestionClick(index)}>{faq.question}</h3>
          {selectedQuestionIndex === index && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>

  )
}


export default Questions;
