interface DrawFeedValue {
  last_value: string;
  key: string;
  name: string;
  created_at: string;
  updated_at: string;
}

interface FeedValue {
  value: string;
  key: string;
}

export {FeedValue, DrawFeedValue};
