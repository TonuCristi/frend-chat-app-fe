import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import Button from "../Button";

import { authApi } from "../../../api/authApi";
import { queryClient } from "../../../main";

export default function LogoutButton() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"], exact: true });
      navigate("/login");
    },
  });

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate()}
      className="active:bg-app hover:bg-app rounded-md p-2 transition-all"
    >
      Log out
    </Button>
  );
}
