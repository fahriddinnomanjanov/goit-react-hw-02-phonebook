import React from 'react';
import styles from "./ContactList.module.css";

const ContactList = ({ list, onDelete}) => {
    const newArray = list.map(({ id, name, number }, index) => {
        return (
            <li className={styles.contactListItem} key={id} >
                {name}: {number}
                <button className={styles.contactButton} onClick={()=>onDelete(index) }>Delete</button>
            </li>
        )
    })
   
    return (
        <ul className={styles.contactList} >
            {newArray}
        </ul>
    )
}


export default ContactList;