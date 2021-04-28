import React from 'react';
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
    return <label className={styles.filterLabel }>
        Filtered by name <input className={styles.filterInput } type="text" value={value} onChange={onChange }/>
    </label>
};

export default Filter;