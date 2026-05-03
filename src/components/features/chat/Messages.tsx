import Message from "./Message";

export default function Messages() {
  return (
    <div className="flex h-full flex-col-reverse overflow-hidden py-4">
      <div className="scrollbar flex w-full flex-col gap-4 overflow-y-auto pr-4">
        <Message isMine={true} text="Salut, ce faci?" />
        <Message isMine={false} text="Salut, foarte bine!" />
        <Message isMine={false} text="Tu ce faci?" />
        <Message
          isMine={true}
          text="Foarte bine, acum am venit de la sala :)"
        />
        <Message isMine={false} text="Bravo, cum a fost?" />
        <Message isMine={true} text="Foarte bine, azi am lucrat spatele" />
        <Message isMine={true} text="Tu ai fost azi?" />
        <Message isMine={false} text="Nu, azi am avut ore la univer" />
        <Message isMine={true} text="Asta e, o sa te duci maine" />
        <Message isMine={false} text="Da, maine vreau sa lucrez pieptul" />
        <Message isMine={true} text="Super, succes!" />
        <Message isMine={false} text="Mersi, de asemenea!" />
      </div>
    </div>
  );
}
