import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from "./ContactList.module.css";

const ContactList = ({ list, onDelete }, index) => {
    const newArray = [...list].map(item => <ContactListItem onDelete={()=>onDelete(index)} key={item.id} {...item}/> )
    return (
        <ul className={styles.contactList}>
            {newArray}
        </ul>
    )
}


export default ContactList;