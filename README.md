# Intoolview-backend

### db design

```
model QuestionDetail {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId
  questionType QuestionTypeEnum
  questionContent String[]
  answerContent String[]
  companies     Company[]
}
```

### api

### plugins

- nest
- prisma
- mongoDB
