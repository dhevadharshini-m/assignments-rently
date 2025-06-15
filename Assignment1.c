#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string.h>

struct Node{
    int data;
    struct Node* next;
};

struct Node* createNode(int data){
    struct Node* nn= (struct Node*)malloc(sizeof(struct Node));
    nn->data=data;
    nn->next=NULL;
    return nn;
}

void insertMiddle(struct Node** head,int data,int pos){
    int count=0;
    struct Node* c=createNode(data);

    int p=0;
    struct Node* temp=*head;
    struct Node* prev=NULL;
    while(p!=pos && temp!=NULL){
        prev=temp;
        p++;
        temp=temp->next;
    }
    prev->next=c;
    c->next=temp;
}

void insertAtEnd(struct Node** head,int data){
    struct Node* cur=createNode(data);
    if(*head==NULL){
        *head=cur;
        return;
    }
    struct Node* temp=*head;
    while(temp->next!=NULL){
        temp=temp->next;
    }
    temp->next=cur;

}

void insertAtbeg(struct Node** head,int data){
    struct Node* cur=createNode(data);

    if(*head==NULL){
        *head=cur;
        return;
    }
    cur->next=*head;
    *head=cur;
}

void delBeg(struct Node** head){
    *head=(*head)->next;
    printf("deleted successfully\n");
}

void delAtEnd(struct Node** head){
    struct Node* t=*head;
    while(t->next->next!=NULL){
        t=t->next;
    }
    printf("Deleted node with data: %d\n", t->next->data);
    free(t->next);
    t->next=NULL;
}

void delAtpos(struct Node** head,int pos){
    struct Node*temp=*head;
    struct Node* prev=NULL;
    int c=0;

    while(temp!=NULL && c!=pos){
        prev=temp;
        c++;
        temp=temp->next;
    }
    prev->next=temp->next;
    printf("deleted node:%d\n",temp->data);
    free(temp);
}

void display(struct Node* head){
    struct Node* temp=head;
    while(temp!=NULL){
        printf("%d -> ", temp->data);
        temp=temp->next;
    }
    printf("NULL\n");
}

void search(struct Node** head,int data){
    struct Node* temp=*head;

    while(temp!=NULL){
        if(temp->data==data){
            printf("found\n");
            return;
        }
        temp=temp->next;
    }
printf("Not found\n");
}

int main(){
    struct Node* head = NULL;
    int choice, data, pos;

    while(1) {
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
        scanf("%d", &choice);

        switch(choice) {
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
                search(&head, data);
                break;

            case 8:
                printf("Linked List: ");
                display(head);
                break;

            case 9:
                printf("Exiting program.\n");
                exit(0);
                break;

            default:
                printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}

