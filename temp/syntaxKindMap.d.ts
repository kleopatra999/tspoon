declare var syntaxKindMap: {
    Unknown: number;
    EndOfFileToken: number;
    SingleLineCommentTrivia: number;
    MultiLineCommentTrivia: number;
    NewLineTrivia: number;
    WhitespaceTrivia: number;
    ShebangTrivia: number;
    ConflictMarkerTrivia: number;
    NumericLiteral: number;
    StringLiteral: number;
    RegularExpressionLiteral: number;
    NoSubstitutionTemplateLiteral: number;
    TemplateHead: number;
    TemplateMiddle: number;
    TemplateTail: number;
    OpenBraceToken: number;
    CloseBraceToken: number;
    OpenParenToken: number;
    CloseParenToken: number;
    OpenBracketToken: number;
    CloseBracketToken: number;
    DotToken: number;
    DotDotDotToken: number;
    SemicolonToken: number;
    CommaToken: number;
    LessThanToken: number;
    LessThanSlashToken: number;
    GreaterThanToken: number;
    LessThanEqualsToken: number;
    GreaterThanEqualsToken: number;
    EqualsEqualsToken: number;
    ExclamationEqualsToken: number;
    EqualsEqualsEqualsToken: number;
    ExclamationEqualsEqualsToken: number;
    EqualsGreaterThanToken: number;
    PlusToken: number;
    MinusToken: number;
    AsteriskToken: number;
    SlashToken: number;
    PercentToken: number;
    PlusPlusToken: number;
    MinusMinusToken: number;
    LessThanLessThanToken: number;
    GreaterThanGreaterThanToken: number;
    GreaterThanGreaterThanGreaterThanToken: number;
    AmpersandToken: number;
    BarToken: number;
    CaretToken: number;
    ExclamationToken: number;
    TildeToken: number;
    AmpersandAmpersandToken: number;
    BarBarToken: number;
    QuestionToken: number;
    ColonToken: number;
    AtToken: number;
    EqualsToken: number;
    PlusEqualsToken: number;
    MinusEqualsToken: number;
    AsteriskEqualsToken: number;
    SlashEqualsToken: number;
    PercentEqualsToken: number;
    LessThanLessThanEqualsToken: number;
    GreaterThanGreaterThanEqualsToken: number;
    GreaterThanGreaterThanGreaterThanEqualsToken: number;
    AmpersandEqualsToken: number;
    BarEqualsToken: number;
    CaretEqualsToken: number;
    Identifier: number;
    BreakKeyword: number;
    CaseKeyword: number;
    CatchKeyword: number;
    ClassKeyword: number;
    ConstKeyword: number;
    ContinueKeyword: number;
    DebuggerKeyword: number;
    DefaultKeyword: number;
    DeleteKeyword: number;
    DoKeyword: number;
    ElseKeyword: number;
    EnumKeyword: number;
    ExportKeyword: number;
    ExtendsKeyword: number;
    FalseKeyword: number;
    FinallyKeyword: number;
    ForKeyword: number;
    FunctionKeyword: number;
    IfKeyword: number;
    ImportKeyword: number;
    InKeyword: number;
    InstanceOfKeyword: number;
    NewKeyword: number;
    NullKeyword: number;
    ReturnKeyword: number;
    SuperKeyword: number;
    SwitchKeyword: number;
    ThisKeyword: number;
    ThrowKeyword: number;
    TrueKeyword: number;
    TryKeyword: number;
    TypeOfKeyword: number;
    VarKeyword: number;
    VoidKeyword: number;
    WhileKeyword: number;
    WithKeyword: number;
    ImplementsKeyword: number;
    InterfaceKeyword: number;
    LetKeyword: number;
    PackageKeyword: number;
    PrivateKeyword: number;
    ProtectedKeyword: number;
    PublicKeyword: number;
    StaticKeyword: number;
    YieldKeyword: number;
    AbstractKeyword: number;
    AsKeyword: number;
    AnyKeyword: number;
    AsyncKeyword: number;
    AwaitKeyword: number;
    BooleanKeyword: number;
    ConstructorKeyword: number;
    DeclareKeyword: number;
    GetKeyword: number;
    IsKeyword: number;
    ModuleKeyword: number;
    NamespaceKeyword: number;
    RequireKeyword: number;
    NumberKeyword: number;
    SetKeyword: number;
    StringKeyword: number;
    SymbolKeyword: number;
    TypeKeyword: number;
    FromKeyword: number;
    OfKeyword: number;
    QualifiedName: number;
    ComputedPropertyName: number;
    TypeParameter: number;
    Parameter: number;
    Decorator: number;
    PropertySignature: number;
    PropertyDeclaration: number;
    MethodSignature: number;
    MethodDeclaration: number;
    Constructor: number;
    GetAccessor: number;
    SetAccessor: number;
    CallSignature: number;
    ConstructSignature: number;
    IndexSignature: number;
    TypePredicate: number;
    TypeReference: number;
    FunctionType: number;
    ConstructorType: number;
    TypeQuery: number;
    TypeLiteral: number;
    ArrayType: number;
    TupleType: number;
    UnionType: number;
    IntersectionType: number;
    ParenthesizedType: number;
    ObjectBindingPattern: number;
    ArrayBindingPattern: number;
    BindingElement: number;
    ArrayLiteralExpression: number;
    ObjectLiteralExpression: number;
    PropertyAccessExpression: number;
    ElementAccessExpression: number;
    CallExpression: number;
    NewExpression: number;
    TaggedTemplateExpression: number;
    TypeAssertionExpression: number;
    ParenthesizedExpression: number;
    FunctionExpression: number;
    ArrowFunction: number;
    DeleteExpression: number;
    TypeOfExpression: number;
    VoidExpression: number;
    AwaitExpression: number;
    PrefixUnaryExpression: number;
    PostfixUnaryExpression: number;
    BinaryExpression: number;
    ConditionalExpression: number;
    TemplateExpression: number;
    YieldExpression: number;
    SpreadElementExpression: number;
    ClassExpression: number;
    OmittedExpression: number;
    ExpressionWithTypeArguments: number;
    AsExpression: number;
    TemplateSpan: number;
    SemicolonClassElement: number;
    Block: number;
    VariableStatement: number;
    EmptyStatement: number;
    ExpressionStatement: number;
    IfStatement: number;
    DoStatement: number;
    WhileStatement: number;
    ForStatement: number;
    ForInStatement: number;
    ForOfStatement: number;
    ContinueStatement: number;
    BreakStatement: number;
    ReturnStatement: number;
    WithStatement: number;
    SwitchStatement: number;
    LabeledStatement: number;
    ThrowStatement: number;
    TryStatement: number;
    DebuggerStatement: number;
    VariableDeclaration: number;
    VariableDeclarationList: number;
    FunctionDeclaration: number;
    ClassDeclaration: number;
    InterfaceDeclaration: number;
    TypeAliasDeclaration: number;
    EnumDeclaration: number;
    ModuleDeclaration: number;
    ModuleBlock: number;
    CaseBlock: number;
    ImportEqualsDeclaration: number;
    ImportDeclaration: number;
    ImportClause: number;
    NamespaceImport: number;
    NamedImports: number;
    ImportSpecifier: number;
    ExportAssignment: number;
    ExportDeclaration: number;
    NamedExports: number;
    ExportSpecifier: number;
    MissingDeclaration: number;
    ExternalModuleReference: number;
    JsxElement: number;
    JsxSelfClosingElement: number;
    JsxOpeningElement: number;
    JsxText: number;
    JsxClosingElement: number;
    JsxAttribute: number;
    JsxSpreadAttribute: number;
    JsxExpression: number;
    CaseClause: number;
    DefaultClause: number;
    HeritageClause: number;
    CatchClause: number;
    PropertyAssignment: number;
    ShorthandPropertyAssignment: number;
    EnumMember: number;
    SourceFile: number;
    JSDocTypeExpression: number;
    JSDocAllType: number;
    JSDocUnknownType: number;
    JSDocArrayType: number;
    JSDocUnionType: number;
    JSDocTupleType: number;
    JSDocNullableType: number;
    JSDocNonNullableType: number;
    JSDocRecordType: number;
    JSDocRecordMember: number;
    JSDocTypeReference: number;
    JSDocOptionalType: number;
    JSDocFunctionType: number;
    JSDocVariadicType: number;
    JSDocConstructorType: number;
    JSDocThisType: number;
    JSDocComment: number;
    JSDocTag: number;
    JSDocParameterTag: number;
    JSDocReturnTag: number;
    JSDocTypeTag: number;
    JSDocTemplateTag: number;
    SyntaxList: number;
    Count: number;
    FirstAssignment: number;
    LastAssignment: number;
    FirstReservedWord: number;
    LastReservedWord: number;
    FirstKeyword: number;
    LastKeyword: number;
    FirstFutureReservedWord: number;
    LastFutureReservedWord: number;
    FirstTypeNode: number;
    LastTypeNode: number;
    FirstPunctuation: number;
    LastPunctuation: number;
    FirstToken: number;
    LastToken: number;
    FirstTriviaToken: number;
    LastTriviaToken: number;
    FirstLiteralToken: number;
    LastLiteralToken: number;
    FirstTemplateToken: number;
    LastTemplateToken: number;
    FirstBinaryOperator: number;
    LastBinaryOperator: number;
    FirstNode: number;
};
export default syntaxKindMap;