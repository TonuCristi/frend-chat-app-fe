import Button from "../../../common/Button";
import Icon from "../../../common/Icon";

export default function AddToFavoritesButton() {
  return (
    <Button className="active:bg-app hover:bg-app flex items-center gap-2 rounded-md p-2 text-left text-nowrap transition-all">
      <Icon name="heart" />
      <span>Add to favorites</span>
    </Button>
  );
}
