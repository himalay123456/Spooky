/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import moment from 'moment';
import Table from '../../../../../Components/Table/Table';
import { Loader } from '../../../../../Components/TableLoader';

const AnalyticsTable = ({ analyticsList }) => {
  const [loading, setLoading] = React.useState(true);
  const [finalList, setFinalList] = React.useState([]);
  const handleViewButton = () => {
    //
  };

  const handleEditButton = () => {
    //
  };
  const handleDeleteButton = () => {
    //
  };

  const generateAdminList = () => {
    const list = [];
    if (analyticsList) {
      analyticsList.slice(0).reverse().map((admin) => {
        const formattedDate = moment.unix(admin.timeStamp).format('DD/MM/YYYY');
        list.push({
          id: admin.blockHash,
          tokenId: admin.transactionIndex,
          editionNumber: admin.blockNumber,
          sender: admin.from,
          reciever: admin.to,
          date: formattedDate,
          price: admin.gasPrice,
          gasFee: admin.gasPrice,
        });
      });
      console.log('analyticsList', list);
      setFinalList(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    generateAdminList();
  }, [analyticsList]);

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'tokenId', flag: 'tokenId', label: 'Token Id', alignRight: false },
    { id: 'editionNumber', flag: 'editionNumber', label: 'Edition Number', alignRight: false },
    { id: 'sender', flag: 'sender', label: 'Sender', alignRight: false },
    { id: 'reciever', flag: 'reciever', label: 'Reciever', alignRight: false },
    { id: 'date', flag: 'date', label: 'Date', alignRight: false },
    { id: 'price', flag: 'price', label: 'Price', alignRight: false },
    { id: 'gasFee', flag: 'gasFee', label: 'Gas Fee', alignRight: false },

    {
      id: 'actions',
      flag: { read: false, edit: false, remove: false },
      callback: { handleViewButton, handleEditButton, handleDeleteButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  if (loading) {
    return <Loader />;
  }

  if (finalList && finalList.length > 0) {
    return (
      <Table USERLIST={finalList} TABLE_HEAD={TABLE_HEAD} />
    );
  }
  return <h2>No Data Found !</h2>;
};

export default AnalyticsTable;
