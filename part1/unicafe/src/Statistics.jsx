import StatisticLine from "./StatisticLine";
const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const totalCount = goodCount + neutralCount + badCount;
  if (totalCount == 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <StatisticLine name="good" value={goodCount} />
      <StatisticLine name="neutral" value={neutralCount} />
      <StatisticLine name="bad" value={badCount} />
      <StatisticLine name="all" value={totalCount} />
      <StatisticLine
        name="average"
        value={(goodCount - badCount) / totalCount}
      />
      <StatisticLine
        name="positive"
        value={(goodCount * 100) / totalCount + "%"}
      />
    </>
  );
};

export default Statistics;
