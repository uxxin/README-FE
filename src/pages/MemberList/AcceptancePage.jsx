import React from 'react';
import { Header } from '../../components/Header';
import { AcceptanceList } from '../../components/MemberList/AcceptanceList';


const AcceptancePage = () => {
    return (
      <div>
        <Header props={{ title: '요청내역', isSearch: true, gap: '1rem' }} />
        <AcceptanceList/>
      </div>
    )
  };

  export default AcceptancePage;