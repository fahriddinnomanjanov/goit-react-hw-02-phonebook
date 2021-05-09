import React from 'react';
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, onDelete }, index) => (
    <li className={styles.contactListItem} key={id} >
        {name}: {number}
        <button className={styles.contactButton} onClick={()=>onDelete(index) }>Delete</button>
    </li>
)

export default ContactListItem;