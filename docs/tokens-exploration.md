# Tokens Explorations

by Marcelo Paiva


These are tokens ideas on how each WCAG success criterion could each have a possible token. Note that some criteria pertain to aspects of UX or content design beyond visual styling (such as form validation or time limits), so not all criteria can be represented directly as CSS tokens. However, they may guide broader design decisions or inform creation of JavaScript functions, for instance.

## 1. **Perceivable**

- 1.1.1 Non-text Content A 2.0 - `AltTextToken`
- 1.2.1 Audio-only and Video-only (Prerecorded) A 2.0 - `AltMediaToken`
- 1.2.2 Captions (Prerecorded) A 2.0 - `CaptionDisplayToken`
- 1.2.3 Audio Description or Media Alternative (Prerecorded) A 2.0 - `AudioDescToken`
- 1.2.4 Captions (Live) AA 2.0 - `LiveCaptionToken`
- 1.2.5 Audio Description (Prerecorded) AA 2.0 - `PreRecordedAudioDescToken`
- 1.2.6 Sign Language (Prerecorded) AAA 2.0 - `SignLangVideoToken`
- 1.2.7 Extended Audio Description (Prerecorded) AAA 2.0 - `ExtendedAudioDescToken`
- 1.2.8 Media Alternative (Prerecorded) AAA 2.0 - `AltMediaToken`
- 1.2.9 Audio-only (Live) AAA 2.0 - `LiveAudioToken`
- 1.3.1 Info and Relationships A 2.0 - `SemanticStructureToken`
- 1.3.2 Meaningful Sequence A 2.0 - `LogicalFlowToken`
- 1.3.3 Sensory Characteristics A 2.0 - `SensoryHintToken`
- 1.3.4 Orientation AA 2.1 - `ContentOrientationToken`
- 1.3.5 Identify Input Purpose AA 2.1 - `InputPurposeToken`
- 1.3.6 Identify Purpose AAA 2.1 - `ContentPurposeToken`
- 1.4.1 Use of Color A 2.0 - `ColorMeaningToken`
- 1.4.2 Audio Control A 2.0 - `AudioControlToken`
- 1.4.3 Contrast (Minimum) AA 2.0 - `MinimumContrastToken`
- 1.4.4 Resize Text AA 2.0 - `ResizableTextToken`
- 1.4.5 Images of Text AA 2.0 - `TextImageToken`
- 1.4.6 Contrast (Enhanced) AAA 2.0 - `EnhancedContrastToken`
- 1.4.7 Low or No Background Audio AAA 2.0 - `BackgroundAudioToken`
- 1.4.8 Visual Presentation AAA 2.0 - `VisualPresentationToken`
- 1.4.9 Images of Text (No Exception) AAA 2.0 - `NoTextImageToken`
- 1.4.10 Reflow AA 2.1 - `ReflowToken`
- 1.4.11 Non-Text Contrast AA 2.1 - `NonTextContrastToken`
- 1.4.12 Text Spacing AA 2.1 - `TextSpacingToken`
- 1.4.13 Content on Hover or Focus AA 2.1 - `HoverFocusContentToken`

## 2. **Operable**

- 2.1.1 Keyboard A 2.0 - `KeyboardAccessibleToken`
- 2.1.2 No Keyboard Trap A 2.0 - `NoTrapToken`
- 2.1.3 Keyboard (No Exception) AAA 2.0 - `CompleteKeyboardAccessibilityToken`
- 2.1.4 Character Key Shortcuts A 2.1 - `KeyShortcutToken`
- 2.2.1 Timing Adjustable A 2.0 - `TimingAdjustToken`
- 2.2.2 Pause, Stop, Hide A 2.0 - `MediaControlToken`
- 2.2.3 No Timing AAA 2.0 - `NoTimingToken`
- 2.2.4 Interruptions AAA 2.0 - `InterruptionControlToken`
- 2.2.5 Re-authenticating AAA 2.0 - `ReauthenticateToken`
- 2.2.6 Timeouts AAA 2.1 - `TimeoutNotificationToken`
- 2.3.1 Three Flashes or Below Threshold A 2.0 - `FlashThresholdToken`
- 2.3.2 Three Flashes AAA 2.0 - `StrictFlashThresholdToken`
- 2.4.1 Bypass Blocks A 2.0 - `BypassBlockToken`
- 2.4.2 Page Titled A 2.0 - `PageTitleToken`
- 2.4.3 Focus Order A 2.0 - `FocusOrderToken`
- 2.4.4 Link Purpose (In Context) A 2.0 - `LinkContextToken`
- 2.4.5 Multiple Ways AA 2.0 - `NavigationAlternativesToken`
- 2.4.6 Headings and Labels AA 2.0 - `HeadingsLabelsToken`
- 2.4.7 Focus Visible AA 2.0 - `FocusVisibilityToken`
- 2.4.8 Location AAA 2.0 - `LocationIndicatorToken`
- 2.4.9 Link Purpose (Link Only) AAA 2.0 - `LinkOnlyPurposeToken`
- 2.4.10 Section Headings AAA 2.0 - `SectionHeadingToken`
- 2.5.1 Pointer Gestures A 2.1 - `PointerGestureAdaptationToken`
- 2.5.2 Pointer Cancellation A 2.1 - `PointerCancellationToken`
- 2.5.3 Label in Name A 2.1 - `LabelNameMatchToken`
- 2.5.4 Motion Actuation A 2.1 - `MotionActuationControlToken`
- 2.5.5 Target Size AA 2.1 - `TargetSizeToken`
- 2.5.6 Concurrent Input Mechanisms AAA 2.1 - `MultipleInputMethodsToken`

## 3. **Understandable**

- 3.1.1 Language of Page A 2.0 - `PageLanguageToken`
- 3.1.2 Language of Parts AA 2.0 - `PartLanguageToken`
- 3.1.3 Unusual Words AAA 2.0 - `GlossaryToken`
- 3.1.4 Abbreviations AAA 2.0 - `AbbreviationsToken`
- 3.1.5 Reading Level AAA 2.0 - `ReadingLevelToken`
- 3.1.6 Pronunciation AAA 2.0 - `PronunciationToken`
- 3.2.1 On Focus A 2.0 - `FocusReactionToken`
- 3.2.2 On Input A 2.0 - `InputChangeReactionToken`
- 3.2.3 Consistent Navigation AA 2.0 - `ConsistentNavigationToken`
- 3.2.4 Consistent Identification AA 2.0 - `ConsistentIdentificationToken`
- 3.2.5 Change on Request AAA 2.0 - `ChangeOnRequestToken`
- 3.3.1 Error Identification A 2.0 - `ErrorIdentificationToken`
- 3.3.2 Labels or Instructions A 2.0 - `LabelInstructionToken`
- 3.3.3 Error Suggestion AA 2.0 - `ErrorSuggestionToken`
- 3.3.4 Error Prevention (Legal, Financial, Data) AA 2.0 - `PreventCriticalErrorToken`
- 3.3.5 Help AAA 2.0 - `HelpAvailabilityToken`
- 3.3.6 Error Prevention (All) AAA 2.0 - `PreventAllErrorToken`

## 4. **Robust**

- 4.1.1 Parsing A 2.0 - `SyntaxCheckToken`
- 4.1.2 Name, Role, Value A 2.0 - `ElementInfoToken`
- 4.1.3 Status Messages AA 2.1 - `StatusMessageToken`

