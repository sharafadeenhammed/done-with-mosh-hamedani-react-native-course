import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

export default function SwipeItem({ children, renderRightAction }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => renderRightAction}>
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
}
