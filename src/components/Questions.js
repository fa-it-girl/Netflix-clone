import { useState} from "react";
import './Questions.css';


const Questions = () => {

  const [click, setClick] = useState([
    {question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!'},
    {question: 'How much does Netflix cost?', answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR5.49 to EUR17.99 a month. No extra costs, no contracts.'},
    {question: 'Where I can watch?', answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'},
    {question: 'How do I cancel?', answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'},
    {question: 'Is Netflix good for kids?', answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'}
  ]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
    // setClick()
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
