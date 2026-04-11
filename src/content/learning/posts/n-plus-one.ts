import { code, h2, h3, list, mermaid, p } from "../helpers";
import type { LearningPost } from "../types";

export const nPlusOnePost: LearningPost = {
  slug: "n-plus-one",
  navGroup: "Queries",
  navLabel: "N+1 queries",
  kicker: "10/04/2026",
  title: "N+1 queries",
  intro: "A common database performance problem when querying related records.",
  blocks: [
    h2("Problem Introduction"),
    p(
      "Imagine you have a social media platform like simpler version of Instagram or Facebook. You'd probably have two main tables, a \"Posts\" table and a \"Users\" table. The posts table would contain all of the posts with a user FK, and the users table would contain a list of posts IDs per user. When a user first open the app, they want to see the  latest post from their friends - how is this actually achieved?"
    ),
    h3("Naive Approach"),
    p(
      "Using an ORM, you likely structure your code like the following: one query to load the current user’s friends, then another round of queries when you walk each friend and read their posts."
    ),
    code(
      `# Assumes User has_many :friends, through: :friendships and has_many :posts
user = User.find(user_id)

# (1) One query: all friends for this user
friends = user.friends.to_a

# (2) One query per friend: that friend’s posts (here, latest post only)
friends.each do |friend|
  friend.posts.order(created_at: :desc).limit(1).to_a
end`,
      "ruby",
      "ActiveRecord: one SELECT for friends, then one SELECT per friend for posts → 1 + N queries."
    ),
    p("Roughly the same work expressed as SQL (parameter placeholders are illustrative):"),
    code(
      `-- (1) Friends for user_id = ?
SELECT users.*
FROM users
INNER JOIN friendships ON friendships.friend_id = users.id
WHERE friendships.user_id = ?;

-- (2) Executed once per friend_id returned above (N times)
SELECT *
FROM posts
WHERE user_id = ?
ORDER BY created_at DESC
LIMIT 1;`,
      "sql",
      "(1) loads friend rows; (2) repeats for each friend — the classic N+1 shape."
    ),
    list(
      [
        "One SELECT loads the friend users for the given account.",
        "Each time you load a friend’s posts, that is another SELECT (same shape, different `user_id`).",
        "Total: 1 + N queries when there are N friends.",
      ],
      false
    ),
    mermaid(
      `flowchart LR
  A[App] --> B[SELECT friends]
  B --> C[SELECT posts × N]
  style C fill:#f3f4f6`,
      "Naive lazy-loading pattern"
    ),
    p(
      "Mermaid renders as SVG in the browser. Invalid diagram text shows an error where the figure would be."
    ),
  ],
};
