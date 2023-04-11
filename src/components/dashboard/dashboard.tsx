import React from "react";
import { RouteComponentProps } from "react-router";
import Navbar from "../Navbar/menu";
import SubjectCard from "../subjectCard";
import subjects from "../../assets/subjects.json"
class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <>
      <Navbar />
      <SubjectCard />
        <h1 className="text-2xl font-bold px-8" >Browse By Subjects</h1>
        
      </>
    );
  }
}
export default Home;
