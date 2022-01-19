import React from 'react';

const Pagelayout = () => {
    return (
        <div className={styles.appWrapper}>
            <Header />
            <Sidebar />
            <div className={styles.pageWrapper}>{children}</div>
        </div>
        
    );
}

export default Pagelayout;