import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteList } from "@test/lib";

const CheckVolumDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > div {
    margin: 10px;
  }
`;

const Main = () => {
  const [usage, setUsage] = useState<number>(0);
  const [percentageUsed, setPercentageUsed] = useState<number>(0);
  const [remainingByte, setRemainingByte] = useState<number>(0);
  const showStorageEstimate = async () => {
    if (!!navigator.storage && !!navigator.storage.estimate) {
      const quota = await navigator!.storage!.estimate()!;

      if (!!quota) {
        setUsage(quota.usage!);
        setPercentageUsed((quota.usage! / quota.quota!) * 100);
        setRemainingByte(quota.quota! - quota.usage!);
      }
    }
  };
  useEffect(() => {
    showStorageEstimate();
  }, []);
  return (
    <section>
      <h1>Client Side Storage</h1>
      <CheckVolumDiv>
        <span>사용 중인 용량: {usage}</span>
        <span>사용할 수 있는 용량: {percentageUsed}%</span>
        <span>남은 용량: {remainingByte} byte</span>
        {/* <div>
          <button>1KB 추가</button>
        </div> */}
      </CheckVolumDiv>
      <RouteList>
        <li>
          <Link to="/cookies">cookies</Link>
        </li>
        <li>
          <Link to="/sessionstorages">Session Storages</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default Main;
