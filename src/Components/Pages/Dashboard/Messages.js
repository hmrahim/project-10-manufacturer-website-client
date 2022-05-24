import React, { useEffect } from "react";
import { useQuery } from "react-query";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";
import MessageRow from "./MessageRow";

const Messages = () => {
  const { data, isLoading, refetch } = useQuery("message", () =>
    fetch("http://localhost:5000/message", getToken).then((res) => res.json())
  );

 



  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">Seriul</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Message</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data.map((message, index) => (
              <MessageRow
                key={index}
                index={index}
                message={message}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
     
      </div>
    </div>
  );
};

export default Messages;
