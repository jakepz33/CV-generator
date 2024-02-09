import ListInfo from "./info";
import Header from "./header";

export default function CVside({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
}) {
  return (
    <div className="appChild">
      <Header
        curName={curName}
        curEmail={curEmail}
        curPhone={curPhone}
        curAddress={curAddress}
      />
      <ListInfo />
      <ListInfo />
    </div>
  );
}
