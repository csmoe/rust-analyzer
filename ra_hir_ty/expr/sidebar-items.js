initSidebarItems({"enum":[["ArithOp",""],["Array",""],["BinaryOp",""],["BindingAnnotation","Explicit binding annotations given in the HIR for a binding. Note that this is not the final binding mode that we infer after type inference."],["CmpOp",""],["Expr",""],["Literal",""],["LogicOp",""],["Ordering",""],["Pat","Close relative to rustc's hir::PatKind"],["Statement",""],["UnaryOp",""],["VariantId",""]],"fn":[["record_literal_missing_fields",""],["record_pattern_missing_fields",""]],"struct":[["Body","The body of an item (function, const etc.)."],["BodySourceMap","An item body together with the mapping from syntax nodes to HIR expression IDs. This is needed to go from e.g. a position in a file to the HIR expression containing it; but for type inference etc., we want to operate on a structure that is agnostic to the actual positions of expressions in the file, so that we don't recompute types whenever some whitespace is typed."],["ExprScopes",""],["ExprValidator",""],["MatchArm",""],["RecordFieldPat",""],["RecordLitField",""],["ScopeEntry",""]],"trait":[["HasSource",""],["Lookup",""]],"type":[["ExprId",""],["ExprPtr",""],["ExprSource",""],["LocalFieldId",""],["PatId",""],["PatPtr",""],["PatSource",""],["ScopeId",""]]});