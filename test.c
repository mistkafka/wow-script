#include <ApplicationServices/ApplicationServices.h>
#include <unistd.h>

int DRAG_STEP = 9;

void horizontalMouseDragRightButton(CGPoint startAt, int horizontalOffset) {
  CGEventSourceRef src = CGEventSourceCreate(kCGEventSourceStatePrivate);
  CGEventRef clickDown = CGEventCreateMouseEvent(
      src, kCGEventRightMouseDown,
      startAt,
      kCGMouseButtonRight);
  CGEventPost(kCGHIDEventTap, clickDown);
  int x = startAt.x;
  for (int i = DRAG_STEP; i <= horizontalOffset; i = i + DRAG_STEP) {
    x = startAt.x + i;
    int y = startAt.y;
    CGEventRef dragEvent = CGEventCreateMouseEvent(
        src, kCGEventRightMouseDragged,
        CGPointMake(x, y),
        kCGMouseButtonRight);
    // CGEventPost(kCGHIDEventTap, dragEvent);
    CGEventPostToPSN("wow", dragEvent);
    printf("drag to (%d, %d)\n", x, y);
    usleep(100 * 1000);
  }
  CGEventRef clickUp = CGEventCreateMouseEvent(
      src, kCGEventRightMouseUp,
      CGPointMake(x, startAt.y),
      kCGMouseButtonRight);
  CGEventPost(kCGHIDEventTap, clickUp);
  CFRelease(clickDown);
  CFRelease(clickUp);
}

int main() {
  sleep(5);
  horizontalMouseDragRightButton(CGPointMake(200, 200), 500);
  printf("over");
  return 0;
}