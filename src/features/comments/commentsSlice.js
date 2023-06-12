import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter(
    (commnet) => commnet.campsiteId === parseInt(campsiteId)
  );
};
