import React from "react";

const listArr = [
  { id: 1, title: "Angular", content: "designed by Google" },
  { id: 2, title: "Vue", content: "Vue community developers" },
  { id: 3, title: "React", content: "designed by facebook" }
];

function ArrContent(props) {
  const arrName = [
    { name: "Peter", comicName: "Spiderman", color: "red" },
    { name: "Steve", comicName: "CaptainAmerica", color: "blue" },
    { name: "Tachala", comicName: "BlackPanther", color: "black" }
  ];
  const newArrName = arrName.map((arrList) => {
    return (
      <p key={arrList.id}>
        {arrList.name}
        <br />
        {arrList.comicName}
        <br />
        {arrList.color}
      </p>
    );
  });
  return (
    <div>
      hi
      {props.name}
      <br />
      {props.id}
      {newArrName}
    </div>
  );
}

function Blog() {
  const newListArr = listArr.map((list) => {
    return (
      <div key={list.id}>
        <p>{list.id}</p>
        <p>{list.title}</p>
        <p>{list.content}</p>
        <ArrContent name="Avez" id="12345" />
      </div>
    );
  });

  return <div>{newListArr}</div>;
}
export default Blog;
