import Heading from "../ui/Heading";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
export default function Sectionsix() {
  const [fullname, setfullName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const FakeApi = {
      fullname,
      phone,
      Email,
    };
    const data = {
      fullname,
      phone,
      Email,
    };
    fetch(FakeApi, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("dsds");
    });
    setEmail("");
    setPhone("");
    setfullName("");
    console.log(FakeApi);
  };
  const Containerform = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    text-align: center;
    color: var(--main-color);
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  const Divcontact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  `;

  const DivcontactElmment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
  `;

  return (
    <div>
      <Heading.H1 type="contact-us">contact us</Heading.H1>
      <Containerform>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setfullName(e.target.value)}
          />
          <input
            type="phone"
            placeholder="Phone"
            value={isNaN(phone) ? alert("Enter Number") : phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">send</Button>
        </form>
        <Divcontact>
          <DivcontactElmment>
            <FaMessage />
            <span>upskilling.eg1@gmail.com</span>
          </DivcontactElmment>
          <div>
            <FaPhoneAlt />
            <span>+201154932137</span>
          </div>
        </Divcontact>
      </Containerform>
    </div>
  );
}
