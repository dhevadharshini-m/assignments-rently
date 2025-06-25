#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

// Utility to create a node
struct Node* createNode(int data) {
    struct Node* nn = (struct Node*)malloc(sizeof(struct Node));
    nn->data = data;
    nn->next = NULL;
    return nn;
}

// Get length of linked list
int getLength(struct Node* head) {
    int len = 0;
    while (head != NULL) {
        len++;
        head = head->next;
    }
    return len;
}

// Insert at specific position
void insertMiddle(struct Node** head, int data, int pos) {
    int len = getLength(*head);
    if (pos < 0 || pos > len) {
        printf("Invalid position. List size: %d\n", len);
        return;
    }

    struct Node* c = createNode(data);
    if (pos == 0) {
        c->next = *head;
        *head = c;
        printf("Inserted %d at position 0\n", data);
        return;
    }

    struct Node* temp = *head;
    for (int i = 0; i < pos - 1; i++) {
        temp = temp->next;
    }
    c->next = temp->next;
    temp->next = c;
    printf("Inserted %d at position %d\n", data, pos);
}

// Insert at end
void insertAtEnd(struct Node** head, int data) {
    struct Node* cur = createNode(data);
    if (*head == NULL) {
        *head = cur;
        printf("Inserted %d at the end (first node)\n", data);
        return;
    }
    struct Node* temp = *head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = cur;
    printf("Inserted %d at the end\n", data);
}

// Insert at beginning
void insertAtbeg(struct Node** head, int data) {
    struct Node* cur = createNode(data);
    cur->next = *head;
    *head = cur;
    printf("Inserted %d at the beginning\n", data);
}

// Delete from beginning
void delBeg(struct Node** head) {
    if (*head == NULL) {
        printf("List is already empty\n");
        return;
    }
    struct Node* temp = *head;
    *head = (*head)->next;
    printf("Deleted node with data: %d\n", temp->data);
    free(temp);
}

// Delete from end
void delAtEnd(struct Node** head) {
    if (*head == NULL) {
        printf("List is already empty\n");
        return;
    }
    if ((*head)->next == NULL) {
        printf("Deleted node with data: %d\n", (*head)->data);
        free(*head);
        *head = NULL;
        return;
    }
    struct Node* t = *head;
    while (t->next->next != NULL) {
        t = t->next;
    }
    printf("Deleted node with data: %d\n", t->next->data);
    free(t->next);
    t->next = NULL;
}

// Delete from specific position
void delAtpos(struct Node** head, int pos) {
    int len = getLength(*head);
    if (*head == NULL) {
        printf("List is empty\n");
        return;
    }
    if (pos < 0 || pos >= len) {
        printf("Invalid position. Valid range: 0 to %d\n", len - 1);
        return;
    }

    if (pos == 0) {
        delBeg(head);
        return;
    }

    struct Node* temp = *head;
    for (int i = 0; i < pos - 1; i++) {
        temp = temp->next;
    }
    struct Node* del = temp->next;
    temp->next = del->next;
    printf("Deleted node with data: %d from position %d\n", del->data, pos);
    free(del);
}

// Display list
void display(struct Node* head) {
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    printf("Linked List: ");
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

// Search for a value
void search(struct Node* head, int data) {
    int pos = 0;
    while (head != NULL) {
        if (head->data == data) {
            printf("Value %d found at position %d\n", data, pos);
            return;
        }
        head = head->next;
        pos++;
    }
    printf("Value %d not found in the list\n", data);
}

// Free the entire list before exit
void freeList(struct Node** head) {
    struct Node* temp;
    while (*head != NULL) {
        temp = *head;
        *head = (*head)->next;
        free(temp);
    }
    printf("All nodes deleted. Memory cleaned up.\n");
}

int main() {
    struct Node* head = NULL;
    int choice, data, pos;

    while (1) {
        printf("\nMenu:\n");
        printf("1. Insert at the beginning\n");
        printf("2. Insert at the end\n");
        printf("3. Insert at a specific position\n");
        printf("4. Delete from the beginning\n");
        printf("5. Delete from the end\n");
        printf("6. Delete from a specific position\n");
        printf("7. Search for a value\n");
        printf("8. Display the list\n");
        printf("9. Exit\n");
        printf("Enter your choice: ");
        if (scanf("%d", &choice) != 1) {
            printf("Invalid input. Exiting.\n");
            break;
        }

        switch (choice) {
            case 1:
                printf("Enter data to insert at the beginning: ");
                scanf("%d", &data);
                insertAtbeg(&head, data);
                break;

            case 2:
                printf("Enter data to insert at the end: ");
                scanf("%d", &data);
                insertAtEnd(&head, data);
                break;

            case 3:
                printf("Enter data and position to insert: ");
                scanf("%d %d", &data, &pos);
                insertMiddle(&head, data, pos);
                break;

            case 4:
                delBeg(&head);
                break;

            case 5:
                delAtEnd(&head);
                break;

            case 6:
                printf("Enter position to delete: ");
                scanf("%d", &pos);
                delAtpos(&head, pos);
                break;

            case 7:
                printf("Enter value to search: ");
                scanf("%d", &data);
                search(head, data);
                break;

            case 8:
                display(head);
                break;

            case 9:
                freeList(&head);
                printf("Exiting program.\n");
                exit(0);

            default:
                printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}
