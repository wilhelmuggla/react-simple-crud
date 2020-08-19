import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const MembersContext = createContext();

export const MembersContextProvider = (props) => {
  const history = useHistory();


  const [membersList, setMembersList] = useState(
    useLocalStorage("membersList", [
      {
        name: "Wilhelm Uggla",
        email: "wille@gabrieluggla.se",
        phone: "0707272676",
      },
      {
        name: "Erik Svensson",
        email: "erik@svensson.se",
        phone: "0763403443",
      },
      {
        name: "Gunilla Solstråle",
        email: "gunilla.solstrale@gmail.com",
        phone: "0723344344",
      },  {
        name: "Peter Gabrielsson",
        email: "gabrielsson@hotmail.com",
        phone: "0707273454",
      },  {
        name: "Tage Fredriksson",
        email: "tage.fredriksson@freddan.se",
        phone: "0763403443",
      }, {
        name: "Jessica Tid",
        email: "tiden@spray.se",
        phone: "0763403443",
      }
    ])
  );

  //retrive data from localstorage or else use initialValue
  function useLocalStorage(key, initialValue) {
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key);
      console.log(item);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  }

  //adds the data to localStorage on update
  useEffect(() => {
    localStorage.setItem("membersList", JSON.stringify(membersList));
  }, [membersList]);

//delete member
  const deleteMember = (member) => {
    console.log(member);
    //confirm message
    confirmAlert({
      title: "Ta bort medlem",
      message:
        "Är du säker på att du vill ta bort " + member.name + " från listan?",
      buttons: [
        {
          label: "Ja",
          onClick: () => {
            setMembersList(
              membersList.filter((el) => {
                return el !== member;
              })
            );
            history.push("/");
          },
        },
        {
          label: "Nej",
        },
      ],
    });
  };

  //adds member
  const addMember = (member) => {
    if (membersList.indexOf(member) === -1) {
      setMembersList([...membersList, member]);
    }
  };

  const editMember = (member, index) => {
    //Makes a  copy of the members
    let items = [...membersList];

    //Get the member 
    let item = membersList[index];

    //change the member
    item.name = member.name;
    item.email = member.email;
    item.phone = member.phone;
    
    //put the updated member in the array
    items[index] = item;
    
    //update the list
    setMembersList(items);
  };

  return (
    <MembersContext.Provider
      value={{ membersList, deleteMember, addMember, editMember }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};
