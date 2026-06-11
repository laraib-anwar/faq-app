import React , {useState} from "react";
import './faq.css';
const Faq = () => {
const [openId, setOpenId] = useState(null);

const handleToggle = (id) => {
  setOpenId((prev) => (prev === id ? null : id));
};
	const faqs = [
    {
      id: 1,
      question: "what is your name?",
      answer: "my name is laraib",
    },
    {
      id: 2,
      question: "what is your weight?",
      answer: "my weight is 63kg",
    },
    {
      id: 3,
      question: "where do you live?",
      answer: "I live in koderma",
    },
  ];


	return (
    <div className = "container">
      <h1>Frequently Asked Questions</h1>
			{
        faqs.map(
					(item, id) => {
						return (
              <div key={item.id} className="card">
                <div className="panel">
                  <div>
                    <h3>{item.question}</h3>
                  </div>
                  <div className="toggle" onClick={() => handleToggle(item.id)}>
                    {openId === item.id ? "-" : "+"}
                  </div>
                </div>

                {openId === item.id && <h4>{item.answer}</h4>}
              </div>
            );
			
					}
				)
			}

    </div>
  );
}

export default Faq;